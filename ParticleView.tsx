/*
  @providesModule ParticleView
*/
'use strict';

import React from 'react';
import {requireNativeComponent, ViewProps} from 'react-native';
var GPHParticleView = requireNativeComponent('GPHParticleView');


type IPosition = {
  x: number, y: number
}

type IEmitterShape = 'point' | 'line' | 'rectangle' | 'circle' | 'cuboid' | 'sphere';

type ISize = {width:number, height: number};

type IEmitterMode = 'points' | 'outline' | 'surface' | 'volume';

type IRenderMode = "unordered" | "oldestFirst" | "oldestLast" | "backToFront" | "additive";

type IParticleView = ViewProps &  {
  emitterPosition?: IPosition;
  emitterZPosition?: number;
  emitterShape?: IEmitterShape;
  emitterSize?: ISize;
  emitterMode?: IEmitterMode;

  // specifies the order the particles are rendered on the screen
  renderMode?: IRenderMode;
  emitterDepth?: number;
  preservesDepth?: boolean;

  // specifies the begin time of the particle emitter - specified in milliseconds
  beginTimeOffset?: number;
  // specifies whether the begin time should use the current media time
  useCurrentMediaTime?: boolean;

  // the next five properties are multipliers of the ParticleCell's property with the same name
  // so a scale property of "2" would double the scale of all the enclosed ParticleCells
  birthRate?: number;
  lifetime?: number;
  velocity?: number;
  scale?: number;
  spin?: number;

  seed?: number;
};

class ParticleView extends React.Component<IParticleView> {

  constructor(props: IParticleView) {
    super(props);
  }

  render() {
    return (
      <GPHParticleView {...this.props}></GPHParticleView>);
  }

  static defaultProps = {
    birthRate: 1,
    lifetime: 1,
    emitterPosition: {x:0, y:0},
    emitterZPosition: 0,
    emitterShape: 'point',
    emitterSize: {width:0, height:0},
    emitterMode: 'volume',
    renderMode: 'unordered',
    emitterDepth: 0,
    preservesDepth: false,
    velocity: 1,
    scale: 1,
    spin: 1,
    seed: 0
  };
}

export default ParticleView;
