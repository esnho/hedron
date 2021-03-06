import { connect } from 'react-redux'
import PropertiesPanel from '../../containers/PropertiesPanel'
import ParamProperties from '../ParamProperties'
import getOpenedSketchNode from '../../selectors/getOpenedSketchNode'
import { sketchNodeOpenedClose } from '../../store/sketches/actions'

const mapStateToProps = (state) => {
  const node = getOpenedSketchNode(state)
  return {
    Component: ParamProperties,
    node: node,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCloseClick: () => {
      dispatch(sketchNodeOpenedClose(ownProps.sketchId))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertiesPanel)
