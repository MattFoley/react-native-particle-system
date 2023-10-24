/*
    @providesModule ParticleCell
*/
'use strict';


import React from 'react';
import type {ColorValue, OpaqueColorValue, ProcessedColorValue} from 'react-native';
import {requireNativeComponent, HostComponent, processColor} from 'react-native';


type IFillMode = 'backwards' | 'forwards' | 'both' | 'removed';

type IContentsRect = {
  x: number; 
  y: number;
  width: number; 
  height: number;
}

type IZoomFilter = "linear" | "nearest";

type IParticleCell = {
  name: string;
  enabled: boolean;

  // a unit rectangle specifying the portion of the particle image to render
  contentsRect: IContentsRect;
  magnificationFilter?: IZoomFilter;
  minificationFilter?: IZoomFilter;
  minificationFilterBias?: number;

  scale?: number
  scaleRange?: number;
  scaleSpeed?: number;

  color?: ColorValue | ProcessedColorValue | undefined | null | OpaqueColorValue;
  redRange?: number;
  greenRange?: number;
  blueRange?: number;
  alphaRange?: number;

  // the rate at which the individaul color components can change
  redSpeed?: number;
  greenSpeed?: number;
  blueSpeed?: number;
  alphaSpeed?: number;

  // how long a particle exists in the system - specified in milliseconds
  lifetime?: number;
  lifetimeRange?: number;

  // how many particles are created each second
  birthRate?: number;

  velocity?: number;
  velocityRange?: number;

  xAcceleration?: number;
  yAcceleration?: number;
  zAcceleration?: number;

  spin?: number;
  spinRange?: number;

  // expressed in radians - specifies the inital direction of a particle
  emissionLatitude?: number;
  emissionLongitude?: number;
  emissionRange?: number;

  beginTime?: number;
  // basic duration - in milliseconds
  duration?: number;

  // The rate of the layer. Used to scale parent time to local cell time/
  speed?: number;

  // Additional offset in active local time. (ms)
  timeOffset?: number;

  // The repeat count of the cell. May be fractional.
  repeatCount?: number;
  repeatDuration?: number;
  autoreverses?: boolean;

  // Defines how the timed cell behaves outside its active duration.
  fillMode?: IFillMode
}

const GPHParticleCell: React.ComponentType<IParticleCell> = requireNativeComponent('GPHParticleCell');

class ParticleCell extends React.Component<IParticleCell> {
  constructor(props: IParticleCell) {
    super(props);
  }

  render() {
    const { color, ...otherProps } = this.props;
    const processedColor = color ? processColor(color) : undefined;

    return (
      <GPHParticleCell {...otherProps} color={processedColor} />
    );
  }

  static defaultProps = {
    name                   : null,
    enabled                : false,
    color                  : 'white',

    lifetime               : 0,
    lifetimeRange          : 0,
    birthRate              : 0,

    emissionLatitude       : 0 * 2 * 3.14159,
    emissionLongitude      : 0 * 2 * 3.14159,
    emissionRange          : 0 * 2 * 3.14159,

    velocity               : 0,
    velocityRange          : 0,

    xAcceleration          : 0,
    yAcceleration          : 0,
    zAcceleration          : 0,

    scale                  : 1,
    scaleRange             : 0,
    scaleSpeed             : 0,

    spin                   : 0,
    spinRange              : 0,

    redRange               : 0,
    greenRange             : 0,
    blueRange              : 0,
    alphaRange             : 0,

    redSpeed               : 0,
    greenSpeed             : 0,
    blueSpeed              : 0,
    alphaSpeed             : 0,

    contentScale           : 1,
    contentsRect           : { x: 0, y: 0, width: 1, height: 1},

    magnificationFilter    : "linear",
    minificationFilter     : "linear",
    minificationFilterBias : 0,

    beginTime              : 0,
    duration               : 0,
    speed                  : 1,

    timeOffset             : 0,

    repeatCount            : 0,
    repeatDuration         : 0,
    autoreverses           : false,

    fillMode               : 'removed',
  };
}

export default ParticleCell;
