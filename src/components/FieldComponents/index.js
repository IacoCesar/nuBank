import React from 'react'
import SpacerView from 'app/components/Spacer'
import LoadingIndicator from 'app/components/LoadingIndicator'
import OffersList from 'app/components/Offers/OffersList'
import TextLabel from 'app/components/TextLabel'
import ButtonClick from 'app/components/Button'

export const Spacer = props => (
  <SpacerView
    {...props}
  />
)

export const Loading = props => (
  <LoadingIndicator
    {...props}
  />
)

export const Offers = props => (
  <OffersList
    {...props}
  />
)

export const Button = props => (
  <ButtonClick
    {...props}
    color={props.color}
    bkColor={props.bkColor}
    label={props.label}
  />
)

export const Label = props => (
  <TextLabel
    {...props}
    marginLeft={props.marginLeft}
    toRight={props.toRight}
    color={props.color}
    label={props.label}
    fontFamily={props.fontFamily}
    fontSize={props.fontSize}
    isClickable={props.isClickable}
    isClickableFunc={props.isClickableFunc}
    lineLimit={props.lineLimit}
  />
)
