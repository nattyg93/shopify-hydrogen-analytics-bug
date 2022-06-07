import {useServerProps} from '@shopify/hydrogen';

export default function BugDemo() {
  const {setServerProps, serverProps} = useServerProps();
  return (
    <button
      className="bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80"
      onClick={() => {
        setServerProps('page_view_demo', !serverProps?.page_view_demo);
      }}
    >
      Change server props
    </button>
  );
}
