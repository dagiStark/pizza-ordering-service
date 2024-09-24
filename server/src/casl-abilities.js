const { AbilityBuilder, Ability } = require('@casl/ability');

function defineAbilitiesFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === 'restaurant-manager') {
    can('manage', 'Pizza', { restaurantId: user.restaurantId });
    can('manage', 'Topping', { restaurantId: user.restaurantId });
    can('view', 'Order', { restaurantId: user.restaurantId });
    can('update', 'Order', { restaurantId: user.restaurantId });
  }

  if (user.role === 'super-admin') {
    can('manage', 'Restaurant', { id: user.restaurantId });
    can('manage', 'User', { restaurantId: user.restaurantId });
  }

  if (user.role === 'customer') {
    can('view', 'Order', { customerId: user.id });
    can('create', 'Order');
  }

  return build();
}

module.exports = { defineAbilitiesFor };
