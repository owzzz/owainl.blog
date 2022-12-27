import packageJson from '../../package.json';


export default function VersionLink() {
    const url = `https://github.com/owzzz/owainl.blog/releases/tag/${packageJson.version}`
    return (
        <a href={url} className="text-xs text-gray-600">V{packageJson.version}</a>
    )
}