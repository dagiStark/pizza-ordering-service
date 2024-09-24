const { defineAbilitiesFor } = require('../casl-abilities');
const { ForbiddenError } = require('@casl/ability');

function authorize(action, resource) {
  return (req, res, next) => {
    const ability = defineAbilitiesFor(req.user);
    if (ability.can(action, resource)) {
      next();
    } else {
      next(new ForbiddenError(`You are not allowed to ${action} this ${resource}`));
    }
  };
}

module.exports = { authorize };
