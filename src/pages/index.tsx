import Link from 'next/link';
import React from 'react';
// import { Col, Row } from 'src/components';
import { Layout, SEO } from 'src/containers';
// import { TodoPanel, TodoRecent } from 'src/modules';
// import { ADD_TODO, TodoAction } from 'src/redux/actions';
// import { initStore, RootState } from 'src/redux/store';

const Home: React.FC = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>
      <Layout>
        <SEO title="Home" />
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Manage your</span>
                <span className="block text-indigo-600 xl:inline">&nbsp;investments.</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Grow your money with alternative investment strategies built into our site in the
                form of an automated, options trading bot.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link href="/pricing">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/dashboard">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Home;

// const Home: React.FC = () => {
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <Row>
//         <Col size={{ md: 6, xs: 12 }}>
//           <TodoPanel />
//         </Col>
//         <Col size={{ md: 6, xs: 12 }}>
//           <TodoRecent />
//         </Col>
//       </Row>
//     </Layout>
//   );
// };

// export default Home;

// // You can also use getStaticProps here instead -- since we aren't
// // actually getting any data from the server with each request, that
// // would be more suitable
// export const getServerSideProps = async (): Promise<{
//   props: { initialReduxState: RootState };
// }> => {
//   // Fetch state from server
//   const state = await Promise.resolve({ todos: ['ssr'] } as RootState);

//   // Create redux store so you can dispatch actions in this
//   // step if needed
//   const reduxStore = initStore(state);
//   const { dispatch } = reduxStore;
//   dispatch({ type: ADD_TODO, todo: 'added with dispatch' } as TodoAction);

//   return {
//     props: {
//       initialReduxState: reduxStore.getState(),
//     },
//   };
// };
