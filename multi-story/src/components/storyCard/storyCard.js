import React from 'react'
import * as SC from './style'

export default function StoryCard() {
  const [story, setStory] = React.useState({
    0: '',
  })
  const [staging, setStaging] = React.useState({})
  const [saveStage, setSaveStage] = React.useState({})
  const [main, setMain] = React.useState('')
  const [userInput, setUserInput] = React.useState('')

  const index = Object.keys(staging).length % 4

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMain(story[Object.keys(story)[Object.keys(story).length - 1]])
    }, 1)
    return () => clearInterval(interval)
  }, [])

  return (
    <SC.Main>
      <SC.BackButton
        onClick={() => {
          return 1
        }}
      >
        {'< Back a step'}
      </SC.BackButton>
      {main ? <SC.MainStory>{main}</SC.MainStory> : ''}
      <SC.stagedStoriesContainer>
        {Object.entries(staging).map(([_, value], i) => (
          <SC.stagedSentence
            key={i}
            onClick={() => {
              let storyIndex = Object.keys(story).length
              const returnObject = Object.assign(story, {
                [storyIndex]:
                  story[Object.keys(story)[Object.keys(story).length - 1]] + //we pull the last entry from our object and appednt the new sentence to it
                  ' ' +
                  value,
              })
              setStory(returnObject)
              let saveStagingIndex = Object.keys(staging).length
              let newObj = Object.assign(saveStage, {
                [saveStagingIndex]: staging,
              })
              console.log(newObj)
              setSaveStage(newObj)
              setStaging('')
            }}
          >
            {value}
          </SC.stagedSentence>
        ))}
      </SC.stagedStoriesContainer>
      <SC.formInput
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <SC.formButton
        onClick={() => {
          if (userInput) {
            setUserInput('')
            const obj = { [index]: userInput }
            setStaging(Object.assign(staging, obj))
          }
        }}
      />
    </SC.Main>
  )
}
