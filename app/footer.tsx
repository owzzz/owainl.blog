import VersionLink from '../components/version-link';

export default function Footer() {
  return (
    <footer className="w-full flex-none flex px-6 md:px-4 justify-end items-center h-[50px] bg-gray-100 border-t border-gray-200">
        <VersionLink />
    </footer>
  );
}