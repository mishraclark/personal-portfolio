import SkillBlock from '~/components/SkillBlock';
import CodeBracket from '~/assets/code-bracket.svg?react';
import Palette from '~/assets/palette.svg?react';
import LaptopCode from '~/assets/laptop-code.svg?react';
import FileCode from '~/assets/file-code.svg?react';
import Database from '~/assets/database.svg?react';
import MobilePhone from '~/assets/mobile-phone.svg?react';
import Vue from '~/assets/vue.svg?react';
import React from '~/assets/react.svg?react';
import CodeMerge from '~/assets/code-merge.svg?react';
import Bitcoin from '~/assets/bitcoin.svg?react';
import BookOpen from '~/assets/book-open.svg?react';
import LaptopFile from '~/assets/laptop-file.svg?react';
import ClipboardCheck from '~/assets/clipboard-check.svg?react';
import Nuxt from '~/assets/nuxt.svg?react';
import Angular from '~/assets/angular.svg?react';
import Flutter from '~/assets/flutter.svg?react';
import Hedera from '~/assets/hedera.svg?react';
import Solana from '~/assets/solana.svg?react';
import Base from '~/assets/base.svg?react';
import Nodejs from '~/assets/nodejs.svg?react';
import SpringBoot from '~/assets/spring-boot.svg?react';
import CSharp from '~/assets/c-sharp.svg?react';
import Java from '~/assets/java.svg?react';
import Tailwind from '~/assets/tailwind.svg?react';


export default function Skills() {
    return (
        <div className="flex flex-col relative p-10 mt-10 lg:mt-[120px]">
            <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
            <div className="flex-col z-30">
                <div className="flex justify-center items-center">
                    <div className="flex text-white text-2xl sm:text-3xl md:text-6xl font-bold">
                        Skills & Technologies
                    </div>

                </div>
<div className='grid grid-cols-5 gap-6 mt-16'>
                <SkillBlock title={'HTML5'} icon={CodeBracket}/>
                <SkillBlock title={'CSS3'} icon={Palette}/>
                <SkillBlock title={'JavaScript'} icon={LaptopCode}/>
                <SkillBlock title={'TypeScript'} icon={FileCode}/>
                <SkillBlock title={'Java'} icon={Java}/>
                <SkillBlock title={'C#'} icon={CSharp}/>
                <SkillBlock title={'Dart'} icon={MobilePhone}/>
                <SkillBlock title={'Vue.js'} icon={Vue}/>
                <SkillBlock title={'Nuxt.js'} icon={Nuxt}/>
                <SkillBlock title={'React.js'} icon={React}/>
                <SkillBlock title={'Angular'} icon={Angular} />
                <SkillBlock title={'Tailwind'} icon={Tailwind}/>
                <SkillBlock title={'Flutter'} icon={Flutter}/>
                <SkillBlock title={'Spring Boot'} icon={SpringBoot}/>
                <SkillBlock title={'.NET'} icon={Database}/>
                <SkillBlock title={'Node.js'} icon={Nodejs}/>
                <SkillBlock title={'Web3.js'} icon={Bitcoin}/>
                <SkillBlock title={'Solana'} icon={Solana}/>
                <SkillBlock title={'Hedera'} icon={Hedera}/>
                <SkillBlock title={'Base'} icon={Base}/>
                <SkillBlock title={'Storybook'} icon={BookOpen}/>
                <SkillBlock title={'Cypress'} icon={ClipboardCheck}/>
                <SkillBlock title={'Jest'} icon={ClipboardCheck}/>
                <SkillBlock title={'Docker'} icon={LaptopFile}/>
                <SkillBlock title={'Git'} icon={CodeMerge}/>
</div>
            </div>
        </div>
    );
}