import { mongooseAdapter } from '@payloadcms/db-mongodb';
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'; // editor-import
import path from 'path';
import { buildConfig } from 'payload/config';
import sharp from 'sharp'
import { fileURLToPath } from 'url';
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import Projects from './globals/Projects';
import Pricing from './globals/Pricing';
import PayloadLogo from './components/payload/PayloadLogo';
import DashboardHeader from './components/payload/DashboardHeader';
import PayloadLogoBig from './components/payload/PayloadLogoBig';
import Finansowanie from './globals/Finansowanie';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        components: {
            graphics: {
                Icon: PayloadLogo,
                Logo: PayloadLogoBig,
            },
            beforeDashboard: [
                DashboardHeader
            ]
        }
    },
    collections: [
        Users, 
        Media
    ],
    globals: [Projects, Pricing, Finansowanie],
    editor: lexicalEditor({}),
    // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    debug: false,
    sharp
});
