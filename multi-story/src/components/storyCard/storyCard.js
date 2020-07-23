import React from 'react'
import * as SC from './style'

export default function StoryCard() {
  return (
    <SC.Main>
      <SC.MainStory>
        Hello this is a raelly great story and will be quite long for the
        purpose of this demo
      </SC.MainStory>
      <SC.stagedStoriesContainer>
        <SC.stagedSentence>lol this is the 1st sentence</SC.stagedSentence>
        <SC.stagedSentence>lol this is the 2nd sentence</SC.stagedSentence>
        <SC.stagedSentence>lol this is the 3rd sentence</SC.stagedSentence>
        <SC.stagedSentence>lol this is the 3rd sentence</SC.stagedSentence>
      </SC.stagedStoriesContainer>
      <SC.styledForm>
        <SC.formInput />
      </SC.styledForm>
    </SC.Main>
  )
}
