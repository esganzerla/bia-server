const { body, query, param } = require("express-validator/check");
const validator = require("validator");
const { Op } = require("sequelize");

const {
  customFindByPkValidation,
  customFindByPkRelationValidation,
  validationEndFunction,
  BadRequestError,
  ApiError,
  NotFoundError,
} = require("../../middlewares/error-mid");
const CtrModelModule = require("../../models/gl_field");
const Model = CtrModelModule.model;

// const utils = require('../../helpers/utils');
const helperValidator = require("../../helpers/validator");

const controllerDefaultQueryScope = "admin";

/**
 * List Validation
 */
exports.getIndexValidate = [
  query("page").optional().isInt(),
  query("q").optional().isString(),
  query("destination").optional().isString(),
  validationEndFunction,
];

/**
 * List Index
 */
exports.getIndex = async (req, res, next) => {
  try {
    const options = {
      where: {},
    };
    // q
    if (req.query.q) {
      const q = req.query.q;
      options.where[Op.or] = {
        name: {
          [Op.iLike]: `%${q}%`,
        },
        code: {
          [Op.iLike]: `%${q}%`,
        },
      };
      if (validator.isNumeric(q, { no_symbols: true })) {
        options.where[Op.or].id = q;
      }
    }
    // destination
    if (req.query.destination) {
      options.where.destination = req.query.destination;
    }
    // query options
    const page = req.query.page || 1;
    Model.setLimitOffsetForPage(page, options);
    options.order = [
      ["order", "asc"],
      ["name", "asc"],
      ["id", "asc"],
    ];
    // exec
    const queryResult = await Model.findAndCountAll(options);
    const meta = Model.paginateMeta(queryResult, page);
    res.sendJsonOK({
      data: await CtrModelModule.jsonSerializer(
        queryResult.rows,
        controllerDefaultQueryScope
      ),
      meta: meta,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get for Edit Validate
 */
exports.getEditValidate = [
  param("id").isInt().not().isEmpty().custom(customFindByPkValidation(Model)),
  validationEndFunction,
];

/**
 * Get for Edit
 */
exports.getEdit = async (req, res, next) => {
  try {
    const entity = req.entity;
    res.sendJsonOK({
      data: await CtrModelModule.jsonSerializer(
        entity,
        controllerDefaultQueryScope
      ),
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Save validation
 */
const saveValidate = [
  param("id").optional().isInt(),
  body("name").trim().not().isEmpty().isLength({
    min: 1,
    max: 60,
  }),
  body("destination")
    .trim()
    .not()
    .isEmpty()
    .isIn(CtrModelModule.DESTINATION_ALL),
  body("code").optional().trim(),
  body("type").isInt().isIn(CtrModelModule.TYPE_ALL),
  body("order").optional().isInt(),
  body("defaultValue").optional().trim(),
  // validationEndFunction, // dont need here, is attached below
];

const saveEntityFunc = async (req, res, next, id) => {
  try {
    const body = req.body;
    let entity = null;
    if (id) {
      entity = req.entity;
    } else {
      entity = Model.build({});
    }
    // fields
    entity.name = body.name;
    entity.destination = body.destination;
    entity.code = body.code;
    entity.type = body.type;
    entity.order = body.order;
    entity.defaultValue = body.defaultValue;
    // save
    await entity.save();
    // send result
    const result = {
      entity: {
        id: entity.id,
      },
    };
    // correct http
    if (id) {
      res.sendJsonOK(result);
    } else {
      res.sendJsonCreatedOK(result);
    }
  } catch (err) {
    next(err);
  }
};

/** Update validation */
exports.putUpdateValidate = [
  ...saveValidate,
  param("id").isInt().custom(customFindByPkValidation(Model)),
  validationEndFunction,
];

/**
 * Update
 */
exports.putUpdate = async (req, res, next) => {
  try {
    await saveEntityFunc(req, res, next, req.params.id);
  } catch (err) {
    next(err);
  }
};

/**
 * Create validation
 */
exports.postCreateValidate = [...saveValidate, validationEndFunction];

/**
 * Create
 */
exports.postCreate = async (req, res, next) => {
  try {
    await saveEntityFunc(req, res, next);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete Validate
 */
exports.deleteValidate = [
  param("id").isInt().custom(customFindByPkValidation(Model)),
  validationEndFunction,
];

/**
 * Delete
 */
exports.delete = async (req, res, next) => {
  try {
    // const id = req.params.id;
    const entity = req.entity;
    await entity.destroy();
    res.sendJsonOK({
      data: await CtrModelModule.jsonSerializer(
        entity,
        controllerDefaultQueryScope
      ),
    });
  } catch (err) {
    next(err);
  }
};
