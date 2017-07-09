export function uInputLinkCreate (nodeId, inputId, inputType) {
  return {
    type: 'U_INPUT_LINK_CREATE',
    payload: {
      nodeId,
      inputId,
      inputType
    }
  }
}

export function rInputLinkCreate (id, link) {
  return {
    type: 'R_INPUT_LINK_CREATE',
    payload: {
      id,
      link
    }
  }
}

export function uInputLinkDelete (id) {
  return {
    type: 'U_INPUT_LINK_DELETE',
    payload: {
      id
    }
  }
}

export function rInputLinkDelete (id) {
  return {
    type: 'R_INPUT_LINK_DELETE',
    payload: {
      id
    }
  }
}

export function uInputLinkUpdate (linkId, inputId, inputType) {
  return {
    type: 'U_INPUT_LINK_UPDATE',
    payload: {
      linkId,
      inputId,
      inputType
    }
  }
}

export function rInputLinkUpdate (linkId, input) {
  return {
    type: 'R_INPUT_LINK_UPDATE',
    payload: {
      linkId,
      input
    }
  }
}

export function inputLinkShotFired (sketchId, method) {
  return {
    type: 'INPUT_LINK_SHOT_FIRED',
    payload: {
      sketchId, method
    }
  }
}

export function inputLinkShotArm (id) {
  return {
    type: 'INPUT_LINK_SHOT_ARM',
    payload: {
      id
    }
  }
}

export function inputLinkShotDisarm (id) {
  return {
    type: 'INPUT_LINK_SHOT_DISARM',
    payload: {
      id
    }
  }
}
