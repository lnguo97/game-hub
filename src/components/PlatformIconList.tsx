import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/usePlatforms";
import type { IconType } from "react-icons";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  const iconSlugs = platforms.map(({ platform }) => {
    const matches = platform.slug.match(
      "pc|playstation|xbox|nintendo|mac|linux|ios|android|web",
    );
    return matches && matches[0];
  });

  const uniqueIconSlugs = [...new Set(iconSlugs)].sort();

  return (
    <>
      <HStack marginY={1}>
        {uniqueIconSlugs.map(
          (slug) =>
            slug && <Icon key={slug} as={iconMap[slug]} color="gray.500" />,
        )}
      </HStack>
    </>
  );
};

export default PlatformIconList;
