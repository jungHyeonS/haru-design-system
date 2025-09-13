import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Pagination, { type PaginationProps } from "./Pagination";

// 페이지네이션 컴포넌트를 위한 래퍼 컴포넌트
const PaginationWrapper = (args: Omit<PaginationProps, "onPageChange">) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

const meta: Meta<typeof PaginationWrapper> = {
  title: "Components/Pagination",
  component: PaginationWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "페이지네이션 컴포넌트는 사용자가 여러 페이지의 콘텐츠를 탐색할 수 있도록 도와주는 UI 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "현재 활성 페이지 번호",
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "전체 페이지 수",
    },
    showPrevNext: {
      control: "boolean",
      description: "Previous/Next 버튼 표시 여부",
    },
    maxVisiblePages: {
      control: { type: "number", min: 3, max: 10 },
      description: "동시에 표시할 최대 페이지 번호 수",
    },
    disabled: {
      control: "boolean",
      description: "컴포넌트 비활성화 여부",
    },
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    showPrevNext: true,
    maxVisiblePages: 5,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationWrapper>;

// 기본 페이지네이션
export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 10,
  },
};

// 첫 번째 페이지
export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

// 마지막 페이지
export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

// 중간 페이지 (생략 표시 포함)
export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

// 페이지 수가 적은 경우
export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
  },
};

// 페이지 수가 많은 경우
export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
  },
};

// Previous/Next 버튼 없는 버전
export const WithoutPrevNext: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    showPrevNext: false,
  },
};

// 최대 표시 페이지 수 조정
export const CustomMaxVisiblePages: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    maxVisiblePages: 7,
  },
};

// 비활성화된 상태
export const Disabled: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    disabled: true,
  },
};

// 단일 페이지
export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

// 두 페이지만 있는 경우
export const TwoPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 2,
  },
};
