import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";
import { useState } from "react";
import Header, { type HeaderProps } from "./Header";

const meta: Meta<HeaderProps> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header 컴포넌트는 애플리케이션의 상단 내비게이션을 제공합니다. 햄버거 메뉴, 제목, 그리고 사용자 정의 콘텐츠를 지원합니다.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "헤더의 메인 제목",
    },
    subtitle: {
      control: "text",
      description: "헤더의 서브 제목 (선택사항)",
    },
    variant: {
      control: "select",
      options: ["default", "sticky", "floating"],
      description: "헤더의 스타일 변형",
    },
    showMenuButton: {
      control: "boolean",
      description: "햄버거 메뉴 버튼 표시 여부",
    },
    isMenuOpen: {
      control: "boolean",
      description: "메뉴 열림 상태 (햄버거 아이콘 애니메이션)",
    },
    onMenuClick: {
      action: "menu-clicked",
      description: "메뉴 버튼 클릭 시 호출되는 함수",
    },
  },
  args: {
    onMenuClick: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "대시보드",
    showMenuButton: true,
    isMenuOpen: false,
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "대시보드",
    subtitle: "프로젝트 관리 시스템",
    showMenuButton: true,
    isMenuOpen: false,
  },
};

export const WithoutMenuButton: Story = {
  args: {
    title: "설정",
    subtitle: "시스템 환경설정",
    showMenuButton: false,
  },
};

export const Sticky: Story = {
  args: {
    title: "스크롤 헤더",
    subtitle: "상단에 고정됩니다",
    variant: "sticky",
    showMenuButton: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200vh",
          background: "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        }}
      >
        <Story />
        <div style={{ padding: "2rem" }}>
          <h2>스크롤해보세요</h2>
          <p>헤더가 상단에 고정됩니다.</p>
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>스크롤 콘텐츠 {i + 1}</p>
          ))}
        </div>
      </div>
    ),
  ],
};

export const Floating: Story = {
  args: {
    title: "플로팅 헤더",
    subtitle: "둥근 모서리와 그림자",
    variant: "floating",
    showMenuButton: true,
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#f9fafb", padding: "0", minHeight: "100vh" }}>
        <Story />
        <div style={{ padding: "2rem" }}>
          <h2>플로팅 스타일</h2>
          <p>헤더가 카드 형태로 표시됩니다.</p>
        </div>
      </div>
    ),
  ],
};

export const WithCustomContent: Story = {
  args: {
    title: "사용자 정의 헤더",
    showMenuButton: true,
    rightContent: (
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          새로 만들기
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">U</span>
        </div>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          title="인터랙티브 헤더"
          subtitle="메뉴 버튼을 클릭해보세요"
          showMenuButton={true}
          isMenuOpen={isMenuOpen}
          onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
          rightContent={
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">
                메뉴 상태: {isMenuOpen ? "열림" : "닫힘"}
              </span>
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                토글
              </button>
            </div>
          }
        />
        <div className="p-6">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">
              햄버거 메뉴 애니메이션
            </h2>
            <p className="text-gray-600 mb-4">
              헤더의 햄버거 메뉴 버튼을 클릭하면 아이콘이 X 모양으로
              애니메이션됩니다. 이는 모바일에서 사이드바와 연동하여 사용할 수
              있습니다.
            </p>
            <div className="space-y-2">
              <p>
                <strong>현재 메뉴 상태:</strong> {isMenuOpen ? "열림" : "닫힘"}
              </p>
              <p>
                <strong>애니메이션:</strong> Framer Motion 기반 부드러운 전환
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const CustomLeftContent: Story = {
  args: {
    showMenuButton: false,
    leftContent: (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">H</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            하루 디자인 시스템
          </h1>
          <p className="text-sm text-gray-500">v1.0.0</p>
        </div>
      </div>
    ),
    rightContent: (
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>
      </div>
    ),
  },
};
