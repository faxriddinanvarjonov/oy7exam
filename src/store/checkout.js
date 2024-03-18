let defaultVal = {
  checkouts: [],
};
export let checkouts = (state = defaultVal, actions) => {
  console.log(actions);
  if (actions.type == "ADD") {
    return {
      ...state,
      checkouts: state.checkouts.id != actions.checkout.id && [
        ...state.checkouts,
        actions.checkout,
      ],
    };
  } else if (actions.type == "REMOVE") {
    return { ...state, checkouts: [] };
  } else {
    return state;
  }
};
