import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import IlliyoonLogo from "../../assets/logo/illiyoon-logo.svg";
import MiseensceneLogo from "../../assets/logo/miseenscene-logo.svg";
import RyoLogo from "../../assets/logo/ryo-logo.svg";
import MenuIcon from "../../assets/menu_icon.svg";

const Link = styled.ul`
  a {
    letter-spacing: 0.18em;
  }
  li:not(:last-child) > a::after {
    @media (min-width: 1024px) {
      content: "|";
      font-weight: 100;
      font-size: 24px;
      margin-left: 10px;
      @media (min-width: 1024px) {
        font-size: 30px;
      }
      @media (min-width: 1280px) {
        margin-left: 26px;
      }
    }
  }
`;

export default function Navigation() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeSection, setActiveSection] = useState(""); // 用來追蹤當前 section
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // 更新當前可見的 section
          }
        });
      },
      { threshold: 0.6 } // 當 60% 的 section 出現時觸發
    );

    // 觀察所有 section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      sectionsRef.current[section.id] = section;
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // 清理 observer
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setIsMenuOpen(false);
    e.preventDefault(); // 阻止預設行為
    const targetSection = sectionsRef.current[sectionId];
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 96;

      // 使用 window.scrollTo 來平滑滾動到指定位置，並且避免被 nav 擋住
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`flex justify-between items-center relative ${
        isScrolled ? "py-4" : "lg:py-[32px] py-3"
      } xl:px-[52px] lg:px-[26px] md:px-[20px] px-[13px] sticky top-0 bg-white z-20 shadow transition-all`}
    >
      <div className="flex gap-[20px] lg:gap-[36px]">
        <img className="w-[28px] md:w-[74px]" src={RyoLogo} alt="" />
        <img className="w-[21px] md:w-[54px]" src={MiseensceneLogo} alt="" />
        <img className="w-[51px] md:w-[135px]" src={IlliyoonLogo} alt="" />
      </div>
      <div
        className="md:hidden"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <img src={MenuIcon} alt="" />
      </div>

      <Link
        className={`flex flex-col md:flex-row ${
          isMenuOpen ? "right-0" : "right-[-96px]"
        } md:static fixed bg-white top-[49px] md:p-0 p-4 text-primary-500 font-bold text-[13px] md:text-[20px] lg:text-[26px] gap-2 md:gap-[10px] lg:gap-[13px] xl:gap-[26px] items-center transition-all`}
      >
        <Li
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          href="coupon"
          text="通路優惠"
        />
        <Li
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          href="announcement"
          text="活動辦法"
        />
        <Li
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          href="register"
          text="發票登錄"
        />
        <Li
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          href="meta"
          text="官方社群"
        />
      </Link>
    </nav>
  );
}

const Li = ({
  activeSection,
  handleNavClick,
  href,
  text,
}: {
  activeSection: string;
  handleNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => void;
  href: string;
  text: string;
}) => (
  <li
    className={`pb-2 border-b border-primary-500 md:p-0 md:border-0 ${
      activeSection === href ? "underline-yellow" : ""
    }`}
  >
    <a
      onClick={(e) => {
        handleNavClick(e, href);
      }}
      href={`#${href}`}
    >
      {text}
    </a>
  </li>
);
