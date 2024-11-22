import { MdSpaceDashboard } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { BsFillImageFill } from "react-icons/bs";
import { TfiLayoutMediaCenterAlt, TfiMenuAlt } from "react-icons/tfi";

export const navItems = [
  {name: 'Dashboard', icon: MdSpaceDashboard, url: '/'},
  {name: 'Documents', icon: IoDocumentText, url: '/documents'},
  {name: 'Images', icon: BsFillImageFill, url: '/images'},
  {name: 'Media', icon:TfiLayoutMediaCenterAlt, url: '/media'},
  {name: 'Others', icon:TfiMenuAlt, url: '/others'},
]