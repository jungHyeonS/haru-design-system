import type { Meta, StoryObj } from "@storybook/react-vite";
import SideBar from "./SideBar";
import type { SidebarMenuItem } from "../../types/common";

// Sample icons
const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    <path d="M20 2v4" />
    <path d="M22 4h-4" />
    <circle cx="4" cy="20" r="2" />
  </svg>
);

const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);

// Sample data
const sampleSections = [
  {
    id: "main",
    items: [
      {
        id: "dashboard",
        label: "대시보드",
        icon: <DashboardIcon />,
        isActive: true,
        badge: {
          text: "새로움",
          variant: "primary" as const,
        },
      },
      {
        id: "ai-services",
        label: "AI 서비스",
        icon: <SparklesIcon />,
        children: [
          {
            id: "ai-chat",
            label: "AI 채팅",
            icon: <MessageIcon />,
            badge: {
              text: "24",
              variant: "secondary" as const,
            },
          },
          {
            id: "smart-assistant",
            label: "스마트 어시스턴트",
            icon: <UsersIcon />,
          },
          {
            id: "ai-analytics",
            label: "AI 분석",
            icon: <ChartIcon />,
          },
        ],
      },
      {
        id: "content-management",
        label: "콘텐츠 관리",
        icon: <FileTextIcon />,
        children: [],
      },
      {
        id: "analytics",
        label: "분석 & 리포트",
        icon: <ChartIcon />,
        badge: {
          text: "Pro",
          variant: "secondary" as const,
        },
      },
    ],
  },
  {
    id: "settings",
    title: "설정",
    items: [
      {
        id: "settings",
        label: "설정 및 환경설정",
        icon: <SettingsIcon />,
      },
    ],
  },
];

const footerContent = (
  <button className="inline-flex items-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px] hover:text-[var(--color-accent-foreground)] px-4 py-2 has-[>svg]:px-3 w-full justify-start gap-3 text-[var(--color-foreground)] hover:bg-[var(--color-accent)] h-10 rounded-lg">
    <MoonIcon />
    다크 모드
  </button>
);

const meta: Meta<typeof SideBar> = {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "네비게이션을 위한 사이드바 컴포넌트입니다. 중첩된 메뉴와 뱃지를 지원합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "floating"],
      description: "사이드바의 외관 변형",
    },
    collapsible: {
      control: "select",
      options: ["none", "icon", "offcanvas"],
      description: "사이드바 접기 방식",
    },
    sections: {
      description: "사이드바에 표시할 섹션 배열",
    },
    header: {
      description: "사이드바 헤더 설정",
    },
    footer: {
      description: "사이드바 푸터 콘텐츠",
    },
    onMenuItemClick: {
      description: "메뉴 아이템 클릭 시 호출되는 콜백 함수",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "320px", maxWidth: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    sections: sampleSections,
    header: {
      title: "Nexus Platform",
      subtitle: "통합 서비스 플랫폼",
      icon: <SparklesIcon />,
    },
    footer: footerContent,
    onMenuItemClick: (item: SidebarMenuItem) => {
      console.log("Menu item clicked:", item);
    },
  },
};

export const Floating: Story = {
  args: {
    ...Default.args,
    variant: "floating",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "100vh",
          width: "320px",
          padding: "16px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const WithoutHeader: Story = {
  args: {
    ...Default.args,
    header: undefined,
  },
};

export const WithoutFooter: Story = {
  args: {
    ...Default.args,
    footer: undefined,
  },
};

export const SimpleMenu: Story = {
  args: {
    ...Default.args,
    sections: [
      {
        id: "simple",
        items: [
          {
            id: "home",
            label: "홈",
            icon: <DashboardIcon />,
            isActive: true,
          },
          {
            id: "profile",
            label: "프로필",
            icon: <UsersIcon />,
          },
          {
            id: "settings",
            label: "설정",
            icon: <SettingsIcon />,
          },
        ],
      },
    ],
  },
};

export const WithBadges: Story = {
  args: {
    ...Default.args,
    sections: [
      {
        id: "badged",
        items: [
          {
            id: "messages",
            label: "메시지",
            icon: <MessageIcon />,
            badge: {
              text: "3",
              variant: "primary",
            },
          },
          {
            id: "notifications",
            label: "알림",
            icon: <DashboardIcon />,
            badge: {
              text: "새로움",
              variant: "secondary",
            },
          },
          {
            id: "premium",
            label: "프리미엄",
            icon: <SparklesIcon />,
            badge: {
              text: "Pro",
              variant: "primary",
            },
          },
        ],
      },
    ],
  },
};

export const NestedMenu: Story = {
  args: {
    ...Default.args,
    sections: [
      {
        id: "nested",
        items: [
          {
            id: "dashboard",
            label: "대시보드",
            icon: <DashboardIcon />,
            isActive: true,
          },
          {
            id: "services",
            label: "서비스",
            icon: <SparklesIcon />,
            children: [
              {
                id: "service-1",
                label: "서비스 1",
                icon: <MessageIcon />,
              },
              {
                id: "service-2",
                label: "서비스 2",
                icon: <UsersIcon />,
                isActive: true,
              },
              {
                id: "service-3",
                label: "서비스 3",
                icon: <ChartIcon />,
              },
            ],
          },
          {
            id: "reports",
            label: "리포트",
            icon: <FileTextIcon />,
            children: [
              {
                id: "monthly",
                label: "월간 리포트",
                icon: <ChartIcon />,
              },
              {
                id: "yearly",
                label: "연간 리포트",
                icon: <ChartIcon />,
              },
            ],
          },
        ],
      },
    ],
  },
};
