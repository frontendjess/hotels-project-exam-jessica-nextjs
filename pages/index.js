import Head from 'next/head';
import Image from 'next/image';

import Body from '../components/body/Body';

export default function Home() {
	return (
		<>
			<Head>
				<title>Holidaze - Hotels for the Urban Traveller</title>
				<meta
					name='description'
					content='Holidaze - Hotels for the Urban Traveller'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Body></Body>
		</>
	);
}
