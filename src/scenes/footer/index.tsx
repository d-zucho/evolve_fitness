import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between gap-16 text-sm md:flex">
        {/* -- Left side */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            itaque dolores, quibusdam repudiandae magnam fuga consectetur,
            accusantium deleniti nemo quam saepe illo voluptatem est laboriosam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            asperiores!
          </p>
          <p className="">&copy; Evogym. All Rights Reserved</p>
        </div>

        {/* -- MIDDLE LINKS */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
