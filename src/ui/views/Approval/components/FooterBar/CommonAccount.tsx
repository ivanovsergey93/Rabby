import React from 'react';
import clsx from 'clsx';
import { Signal } from '@/ui/component/Signal';

export interface Props {
  icon: string;
  signal?: 'CONNECTED' | 'DISCONNECTED' | 'ERROR';
  customSignal?: React.ReactNode;
  tip?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const CommonAccount: React.FC<Props> = ({
  icon,
  tip,
  signal,
  customSignal,
  children,
  footer,
}) => {
  const bgColor = React.useMemo(() => {
    switch (signal) {
      case undefined:
      case 'DISCONNECTED':
        return 'gray';

      case 'ERROR':
        return 'orange';

      default:
      case 'CONNECTED':
        return 'green';
    }
  }, [signal]);

  return (
    <section>
      <div className={clsx('space-x-6 flex items-start', 'relative')}>
        <div className="relative mt-[-3px]">
          <img src={icon} className="w-[20px] h-[20px]" />
          {customSignal}
          {signal && <Signal isBadge color={bgColor} />}
        </div>
        <div className="text-12 font-medium w-full text-gray-subTitle">
          {tip}
        </div>
        {children}
      </div>
      {footer}
    </section>
  );
};
