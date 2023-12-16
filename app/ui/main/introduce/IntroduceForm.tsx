"use client";

import { useEffect } from "react";

// Components
import Chip from "../Chip";

// State stores
import { useIntroduceFormStore } from "@/store/introduceFormStore";
import { useChatbotStore } from "@/store/chatbotStore";

// Types
import { OCCUPATION_VALUES } from "@/type/user";

const IntroduceForm = () => {
    const {
        setName,
        setOccupation,
        toggleKeyword,
        setBriefIntroduction,
        setIntroduction,
        setKeywords,
        name,
        introduction,
        briefIntroduction,
        keywords,
    } = useIntroduceFormStore();
    const { chatResult } = useChatbotStore();

    useEffect(() => {
        if (chatResult) {
            setBriefIntroduction(chatResult.briefIntroduction);
            setIntroduction(chatResult.introduction);
            setKeywords(chatResult.keywords);
        }
    }, []);

    return (
        <div className="flex flex-col gap-8 pl-8 pr-8">
            <div className="flex gap-4 justify-between">
                <div className="flex items-center gap-4">
                    <label htmlFor="name" className="font-[700] w-20">
                        이름
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        className="border rounded-[20px] p-4 w-32 h-14"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="occupation" className="font-[700]">
                        직무
                    </label>

                    <select
                        id="occupation"
                        className="border rounded-[20px] p-4 w-32 h-14"
                        onChange={(e) =>
                            setOccupation(e.target.value as (typeof OCCUPATION_VALUES)[number])
                        }
                    >
                        {OCCUPATION_VALUES.map((occupation) => (
                            <option key={occupation} value={occupation}>
                                {occupation}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex gap-4">
                <p className="font-[700] w-20">나의 키워드</p>
                {keywords.map((keyword) => (
                    <Chip
                        key={keyword}
                        label={keyword}
                        bgColor={keywords.includes(keyword) ? "#F6EFFF" : "#FFFFFF"}
                        textColor={keywords.includes(keyword) ? "#7A34F2" : "#121213"}
                        borderColor={keywords.includes(keyword) ? "#7A34F2" : "#E0E0E0"}
                        onClick={() => toggleKeyword(keyword)}
                    />
                ))}
            </div>
            <div className="flex gap-4">
                <label htmlFor="briefIntroduction" className="font-[700] w-20">
                    한 줄 소개
                </label>
                <textarea
                    id="briefIntroduction"
                    value={briefIntroduction}
                    className="border rounded-[20px] p-4 flex-grow h-24 resize-none"
                    onChange={(e) => setBriefIntroduction(e.target.value)}
                />
            </div>
            <div className="flex gap-4">
                <label htmlFor="introduction" className="font-[700] w-20">
                    자기 소개
                </label>
                <textarea
                    id="introduction"
                    value={introduction}
                    className="border rounded-[20px] p-4 flex-grow h-72 resize-none"
                    onChange={(e) => setIntroduction(e.target.value)}
                />
            </div>
        </div>
    );
};

export default IntroduceForm;
