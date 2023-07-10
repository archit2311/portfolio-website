import React from 'react'

function SkillLevel(props) {
  return (
    <div>
      <div class="progress">
          <div
            class="progress-bar progress-bar-animated progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: props.width }}
            aria-valuenow={props.value}
            aria-valuemin="0"
            aria-valuemax="100"
          >{props.name}</div>
        </div>
    </div>
  )
}

export default SkillLevel
