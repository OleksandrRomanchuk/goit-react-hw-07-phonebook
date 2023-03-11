import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'shared/components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const ContactDetailPage = lazy(() =>
	import('pages/ContactDetailPage/ContactDetailPage')
);
const EditPage = lazy(() => import('pages/EditPage/EditPage'));
const ContactsGroupPage = lazy(() => import('pages/GroupsPage/GroupsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="my-contacts" element={<ContactsPage />}>
					<Route path=":id" element={<ContactDetailPage />} />
					<Route path="edit/:id" element={<EditPage />} />
				</Route>
				<Route path="my-groups" element={<ContactsGroupPage />} />
				<Route
					path="my-contacts/:id/details"
					element={<ContactDetailPage group="all" />}
				/>
				<Route path="my-contacts/edit/:id" element={<EditPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="*" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
};

export default App;
