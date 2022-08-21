export default (URL: string, Heading: string, SubHeading: string) => {
  return (
    <>
      <a
        href={URL}
        className="p-6 m-4 text-left no-underline border border-solid max-w-[300px] hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600"
      >
        <h2 className="mx-0 mt-0 mb-4 text-2xl">{Heading} &rarr;</h2>
        <p className="m-0 text-xl leading-normal">{SubHeading}</p>
      </a>
    </>
  );
};
