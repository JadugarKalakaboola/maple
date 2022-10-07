/* eslint-disable import/no-anonymous-default-export */
export default {
        github: 'https://github.com/shuding/nextra',
        docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
        titleSuffix: ' – Nextra',
        logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">Nextra</span>
            <span className="text-gray-600 font-normal hidden md:inline">
            The Next.js Static Site Generator
            </span>
        </>
        ),
        search: true,
        prevLinks: true,
        nextLinks: true,
        footer: true,
        footerEditLink: 'Edit this page on GitHub',
        footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
        unstable_faviconGlyph: '👋',
}