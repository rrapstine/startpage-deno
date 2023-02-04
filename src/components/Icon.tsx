import { useDynamicSvgImport } from '../utils/hooks/useDynamicSvgImport.ts';

interface Props {
  name: string;
  keyNum: number;
  onClick: () => void;
}

function Icon({ name, keyNum, onClick }: Props) {
  const { loading, Icon } = useDynamicSvgImport(name);

  return (
    <>
      {loading && <div className='h-6 w-6 animate-pulse rounded-full bg-gray' />}
      {Icon && (
        <button className='h-6 w-6' data-app={name} onClick={onClick}>
          <Icon className={`h-full w-full ${keyNum == 0 ? 'active' : ''}`} />
        </button>
      )}
    </>
  );
}

export default Icon;
