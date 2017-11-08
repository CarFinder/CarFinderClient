import * as React from 'react';
import * as interfaces from '../../interfaces';

export interface Props {
  handleGetLiquidAds: () => void;
  liquidAds: interfaces.LiquidAds[];
}

const LiquidAds = (props: Props) => <div>LiquidAds</div>;

export default LiquidAds;
