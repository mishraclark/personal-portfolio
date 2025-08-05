import SkillListItem from '~/components/SkillListItem';
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


export default function SkillsList() {
    return (
        <div id="skills" className="flex flex-col relative p-10 mt-10 lg:mt-[120px]">
            <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
            <div className="flex-col z-30">
                <div className="flex justify-center items-center">
                    <div className="flex text-white text-2xl sm:text-3xl md:text-6xl font-bold">
                        Skills & Technologies
                    </div>

                </div>
                <div className='flex flex-wrap gap-6 mt-16'>
                    <SkillListItem title={'HTML5'} icon={CodeBracket}/>
                    <SkillListItem title={'CSS3'} icon={Palette}/>
                    <SkillListItem title={'JavaScript'} icon={LaptopCode}/>
                    <SkillListItem title={'TypeScript'} icon={FileCode}/>
                    <SkillListItem title={'Java'} icon={Java}/>
                    <SkillListItem title={'C#'} icon={CSharp}/>
                    <SkillListItem title={'Dart'} icon={MobilePhone}/>
                    <SkillListItem title={'Vue.js'} icon={Vue}/>
                    <SkillListItem title={'Nuxt.js'} icon={Nuxt}/>
                    <SkillListItem title={'React.js'} icon={React}/>
                    <SkillListItem title={'Angular'} icon={Angular} />
                    <SkillListItem title={'Tailwind'} icon={Tailwind}/>
                    <SkillListItem title={'Flutter'} icon={Flutter}/>
                    <SkillListItem title={'Spring Boot'} icon={SpringBoot}/>
                    <SkillListItem title={'.NET'} icon={Database}/>
                    <SkillListItem title={'Node.js'} icon={Nodejs}/>
                    <SkillListItem title={'Web3.js'} icon={Bitcoin}/>
                    <SkillListItem title={'Solana'} icon={Solana}/>
                    <SkillListItem title={'Hedera'} icon={Hedera}/>
                    <SkillListItem title={'Base'} icon={Base}/>
                    <SkillListItem title={'Storybook'} icon={BookOpen}/>
                    <SkillListItem title={'Cypress'} icon={ClipboardCheck}/>
                    <SkillListItem title={'Jest'} icon={ClipboardCheck}/>
                    <SkillListItem title={'Docker'} icon={LaptopFile}/>
                    <SkillListItem title={'Git'} icon={CodeMerge}/>
                </div>
            </div>
        </div>
    );
}