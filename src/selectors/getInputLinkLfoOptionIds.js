import getNodes from './getNodes'

export default (state, linkId) => {
  const link = state.inputLinks[linkId]

  if (link.input && link.input.id === 'lfo') {
    const optionIds = link.lfoOptionIds
    const optionNodes = getNodes(state, optionIds)
    const shapeOpt = optionNodes.find(node => node.key === 'shape')
    const isNoise = shapeOpt.value === 'noise'

    // Only show "rate" option for shots
    if (link.nodeType === 'shot') {
      const typesForShot = ['rate']
      if (isNoise) {
        // If its noise, also show the "seed" option
        typesForShot.push('seed')
      }
      return optionIds.filter(id => {
        return typesForShot.includes(state.nodes[id].key)
      })
    } else {
      // For params, show all options if noise
      if (isNoise) {
        return optionIds
      } else {
        // If its not noise, omit the "seed" option
        return optionIds.filter(id => {
          return state.nodes[id].key !== 'seed'
        })
      }
    }
  }

  return undefined
}
