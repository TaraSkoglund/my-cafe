export default function Page({ params }) {
  // const router = useRouter();
  // return <p>Post: {router.query.slug}</p>;
  return (
    <div>
      <p>{params.name}</p>
    </div>
  );
}
