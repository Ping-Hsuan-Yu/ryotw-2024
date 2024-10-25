import { styled } from "styled-components";
import RyoLogo from "../../assets/logo/ryo-logo.svg";
import MiseensceneLogo from "../../assets/logo/miseenscene-logo.svg";
import IlliyoonLogo from "../../assets/logo/illiyoon-logo.svg";
import { useEffect, useRef, useState } from "react";

const Link = styled.ul`
  a {
    letter-spacing: 0.18em;
  }
  li:not(:last-child) > a::after {
    content: "|";
    font-weight: 100;
    font-size: 30px;
    margin-left: 26px;
  }
`;

export default function Navigation() {
  const [isScrolled, setScrolled] = useState(false);

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
      className={`flex justify-between items-center ${
        isScrolled ? "py-4" : "py-[32px]"
      } px-[50px] sticky top-0 bg-white z-10 shadow transition-all`}
    >
      <div className="flex gap-[36px]">
        <img width={74} height={53} src={RyoLogo} alt="" />
        <img width={54} height={66} src={MiseensceneLogo} alt="" />
        <img width={135} height={39} src={IlliyoonLogo} alt="" />
      </div>
      <Link className="flex text-primary-500 font-bold text-[26px] gap-[26px] items-center">
        <li className={activeSection === "coupon" ? "underline-yellow" : ""}>
          <a
            onClick={(e) => {
              handleNavClick(e, "coupon");
            }}
            href="#coupon"
          >
            通路優惠
          </a>
        </li>
        <li
          className={activeSection === "announcement" ? "underline-yellow" : ""}
        >
          <a
            onClick={(e) => {
              handleNavClick(e, "announcement");
            }}
            href="#announcement"
          >
            活動辦法
          </a>
        </li>
        <li className={activeSection === "register" ? "underline-yellow" : ""}>
          <a
            onClick={(e) => {
              handleNavClick(e, "register");
            }}
            href="#register"
          >
            發票登錄
          </a>
        </li>
        <li className={activeSection === "meta" ? "underline-yellow" : ""}>
          <a
            onClick={(e) => {
              handleNavClick(e, "meta");
            }}
            href="#meta"
          >
            官方社群
          </a>
        </li>
      </Link>
    </nav>
  );
}
