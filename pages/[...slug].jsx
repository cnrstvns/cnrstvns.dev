export default function NotFound() {
  return '';
}

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
}
