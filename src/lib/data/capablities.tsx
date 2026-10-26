import type { SvgIconComponent } from "@mui/icons-material";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

export type Capability = {
  id: string;
  title: string;
  description: string;
  Icon: SvgIconComponent;
};

export const CAPABILITIES: readonly Capability[] = [
  {
    id: "conferences",
    title: "Conferences & summits",
    description:
      "Programme design, speakers and seamless delivery, from plenary to breakout.",
    Icon: CoPresentOutlinedIcon,
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    description:
      "Thoughtful floor plans and exhibitor experiences that encourage discovery.",
    Icon: GridViewOutlinedIcon,
  },
  {
    id: "strategy",
    title: "Event strategy",
    description: "A clear purpose, audience and roadmap for every gathering.",
    Icon: ExploreOutlinedIcon,
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
    description:
      "Relevant partnerships and activation opportunities built around shared value.",
    Icon: HandshakeOutlinedIcon,
  },
  {
    id: "registration",
    title: "Delegate registration",
    description:
      "A considered journey from the first invitation to the welcome desk.",
    Icon: ConfirmationNumberOutlinedIcon,
  },
  {
    id: "marketing",
    title: "Event marketing",
    description:
      "Audience insight, compelling campaigns and a connected communications plan.",
    Icon: CampaignOutlinedIcon,
  },
  {
    id: "creative",
    title: "Creative production",
    description:
      "A distinctive event identity, brought to life across every touchpoint.",
    Icon: DrawOutlinedIcon,
  },
  {
    id: "logistics",
    title: "Logistics & operations",
    description:
      "Venues, suppliers and on-site coordination, all working in concert.",
    Icon: AltRouteOutlinedIcon,
  },
  {
    id: "audiovisual",
    title: "Audiovisual services",
    description:
      "Sound, lighting, staging and show direction that put the content first.",
    Icon: GraphicEqIcon,
  },
];
