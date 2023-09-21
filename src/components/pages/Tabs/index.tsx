import React, { ReactNode, useState } from 'react';
import Style from './style';

interface ITab {
    title: string;
    content: ReactNode;
}

interface IProps {
    tabs: ITab[];
}

const Tabs = ({ tabs }: IProps) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].title);

    return (
        <Style>
            <div className="tabs_head">
                {tabs.map((el) => (
                    <button
                        key={el.title}
                        className={`tabs_head_item ${
                            el.title === activeTab ? 'active' : ''
                        }`}
                        onClick={() => {
                            setActiveTab(el.title);
                        }}
                    >
                        {el.title}
                    </button>
                ))}
            </div>
            <div className="body">
                {tabs.find((el) => el.title === activeTab)?.content}
            </div>
        </Style>
    );
};

export default Tabs;
