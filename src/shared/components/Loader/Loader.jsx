import { ColorRing } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

const Loader = () => {
	return (
		<LoaderBackdrop>
			<ColorRing
				visible={true}
				height="120"
				width="120"
				ariaLabel="blocks-loading"
				wrapperStyle={{}}
				wrapperClass="blocks-wrapper"
				colors={[
					'rgba(250, 0, 46, 1)',
					'rgba(232, 121, 17, 1)',
					'rgba(241, 178, 17, 1)',
					'rgba(42, 153, 159, 1)',
					'rgba(24, 107, 184, 1)',
				]}
			/>
		</LoaderBackdrop>
	);
};

export default Loader;
