import { FunctionComponent } from 'react';

import Dungeon from '../../src/WoWGuides/Dungeons/Components/Dungeon';
import Layout from '../../src/Shared/Layout/Component/Layout';
import GettingThere from '../../src/WoWGuides/GettingThere/Components/GettingThere';
import Section from '../../src/WoWGuides/Section/Components/Section';
import SectionTitle from '../../src/WoWGuides/Section/Components/SectionTitle';
import Tips from '../../src/WoWGuides/Tips/Components/Tips';
import Tip from '../../src/WoWGuides/Tips/Components/Tip';
import Rupt from '../../src/WoWGuides/Tips/Components/Rupt';
import BossSection from '../../src/WoWGuides/Section/Components/BossSection';
import BossTitle from '../../src/WoWGuides/Section/Components/BossTitle';
import TankTips from '../../src/WoWGuides/Tips/Components/TankTips';
import Tank from '../../src/WoWGuides/Tips/Components/Tank';
import HealerTips from '../../src/WoWGuides/Tips/Components/HealerTips';
import Healer from '../../src/WoWGuides/Tips/Components/Healer';
import NpcWiseMari from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Npcs/NpcWiseMari';
import SpellSplash from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSplash';
import SpellHydrolance from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellHydrolance';
import SpellTidalBurst from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellTidalBurst';
import SpellTaintedRipple from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellTaintedRipple';
import SpellSurgingDeluge from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSurgingDeluge';
import SpellCorruptedVortex from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellCorruptedVortex';
import SpellCorruptedGeyser from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellCorruptedGeyser';
import SpellWashAway from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellWashAway';
import NpcHauntingSha from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Npcs/NpcHauntingSha';
import SpellHauntingScream from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellHauntingScream';
import SpellHauntingGaze from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellHauntingGaze';
import SpellThrowTorch from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellThrowTorch';
import SpellSleepySoliloquy from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSleepySoliloquy';
import SpellTerritorialDisplay
    from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellTerritorialDisplay';
import SpellViciousPeck from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellViciousPeck';
import SpellTearsofPain from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellTearsofPain';
import SpellFitofRage from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellFitofRage';
import SpellStaggeringBlow from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellStaggeringBlow';
import SpellGoldenBarrier from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellGoldenBarrier';
import SpellSavageLeap from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSavageLeap';
import SpellCatNap from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellCatNap';
import NpcPeril from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Npcs/NpcPeril';
import NpcStrife from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Npcs/NpcStrife';
import SpellIntensity from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellIntensity';
import SpellDissipation from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellDissipation';
import SpellAgony from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellAgony';
import SpellFeelingofSuperiority
    from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellFeelingofSuperiority';
import SpellFlamesofDoubt from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellFlamesofDoubt';
import SpellSummonSha from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSummonSha';
import SpellShaEruption from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellShaEruption';
import SpellLegSweep from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellLegSweep';
import SpellSettingSunKick from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSettingSunKick';
import SpellDefilingMist from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellDefilingMist';
import SpellTouchofRuin from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellTouchofRuin';
import SpellShatteredResolve from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellShatteredResolve';
import SpellDarkClaw from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellDarkClaw';
import SpellSerpentWave from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSerpentWave';
import SpellJadeSerpentWave from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellJadeSerpentWave';
import SpellJadeFireBreath from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellJadeFireBreath';
import SpellSerpentKick from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSerpentKick';
import SpellSerpentStrike from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellSerpentStrike';
import SpellJadeSerpentStrike from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellJadeSerpentStrike';
import SpellJadeSerpentKick from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellJadeSerpentKick';
import SpellBoundsofReality from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellBoundsofReality';
import NpcShaofDoubt from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Npcs/NpcShaofDoubt';
import SpellTouchofNothingness
    from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellTouchofNothingness';
import SpellWitherWill from '../../src/WoWGuides/Dungeons/TempleOfTheJadeSerpent/Spells/SpellWitherWill';

const TempleOfTheJadeSerpent: FunctionComponent = () => (
    <Layout>
        <Dungeon>Temple of the Jade Serpent</Dungeon>

        <GettingThere>The Jade Forest, Pandaria. Fly North.</GettingThere>

        <Section>
            <SectionTitle>Trash Before Wise Mari</SectionTitle>

            <p>Turn Left and head towards <NpcWiseMari />.</p>

            <Tips>
                <Tip>
                    Corrupt Droplets are non-elites, but continuously cast <SpellSplash />, dealing AoE damage.
                    Cannot interrupt, but Stun to quickly nuke them.
                </Tip>
                <Rupt>
                    Use Rupts on Fallen Waterspeaker for <SpellHydrolance /> and <SpellTidalBurst />. Stuns can
                    cover up lack of interrupts.
                </Rupt>
                <Tip>
                    Corrupt Living Water = most dangerous trash. <SpellTaintedRipple /> does serious damage, and
                    applies damage-over-time. LoS the cast if you are quick enough. Sidestep <SpellSurgingDeluge />
                    ground animation.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Wise Mari</BossTitle>

            <Tips>
                <Rupt>
                    An Interrupt order for <SpellHydrolance /> helps.
                </Rupt>
                <Tip>
                    When targeted by <SpellCorruptedVortex />, put the ground animation away at the end of the cast.
                </Tip>
                <Tip>
                    Watch out for <SpellCorruptedGeyser />, water will be bubbly seconds before triggering.
                </Tip>
                <Tip>
                    Avoid <SpellWashAway /> at all costs. Care for <SpellCorruptedGeyser />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Help the team by assigning the interrupts for <SpellHydrolance />.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>Spot heal the player targeted by <SpellCorruptedVortex />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Peril and Strife</SectionTitle>

            <p>Back to beginning then right.</p>

            <Tips>
                <Rupt>
                    Interrupt <NpcHauntingSha />&apos;s <SpellHauntingScream /> AoE fear. Also casts
                    <SpellHauntingGaze /> on tank so keep him healthy.
                </Rupt>
                <Tip>
                    Beware of <SpellThrowTorch /> from Xiang and Jiang on random target, serious damage over time.
                    Healer can dispel.
                </Tip>
                <Rupt>
                    Interrupt <SpellSleepySoliloquy /> from The Talking Fish. Puts asleep for 6 seconds.
                </Rupt>
                <Tip>
                    Run away from The Songbird Queen&apos;s <SpellTerritorialDisplay />, 6 yards radius. Tank must care
                    for <SpellViciousPeck />, high frontloaded damage plus Bleed effect.
                </Tip>
                <Rupt>
                    Avoid <SpellTearsofPain /> ground puddles from The Crybaby Hozen. Interrupt <SpellFitofRage />
                    to stop The Crybaby Hozen from further empowering itself.
                </Rupt>
                <Tank>
                    Watch out for <SpellStaggeringBlow /> debuff from The Golden Beetle. Use Dispel or Purge against
                    <SpellGoldenBarrier />, an absorb shield which deals massive damage within 40 yards upon breaking.
                </Tank>
                <Rupt>
                    The Nodding Tiger will always <SpellSavageLeap /> on furthest target, initial damage plus Bleed
                    effect. Stop <SpellCatNap /> or it will restore health every second.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Peril and Strife</BossTitle>

            <p>
                Engage the Corrupted Scroll. <NpcPeril /> and <NpcStrife /> gain <SpellIntensity /> when being attacked.
                Become immune for 15 seconds at 10 stacks. Ignoring them then makes them suffer from
                <SpellDissipation />. Never attack both, swap from one to another (swap at 5-6 stacks).
            </p>

            <Tips>
                <Tip>
                    Do not use cleave. Uncertain at this time if damage-over-time trigger <SpellIntensity />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Hold aggro on both to avoir yeam from being accidentaly cleaved.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Both will continuously cast <SpellAgony />. Use healing cooldowns when <SpellIntensity /> is high.
                </Healer>
                <Healer>Spot heal players with high stacks of <SpellFeelingofSuperiority />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Liu Flameheart</SectionTitle>

            <p>Some old ennemies alongside new ones.</p>

            <Tips>
                <Tip>
                    Shambling Infester is the only mini-boss. Sidestep <SpellFlamesofDoubt /> frontal cone. Use
                    defensive if low health during <SpellSummonSha />. Lesser Sha cast <SpellShaEruption /> when
                    defeated.
                </Tip>
                <Tip>
                    Avoid Sha-Touched Guardians&apos; <SpellLegSweep />, damage within 6 yards. Will strike tank with
                    <SpellSettingSunKick />, which deals high initial damage and applies 20% healing debuff.
                </Tip>
                <Tip>
                    Depraved Mistweaver = only important caster. Interrupt <SpellDefilingMist /> and watch for
                    <SpellTouchofRuin /> (Curse effect, use de-cursing abilities or defensives to survive).
                </Tip>
                <Tip>
                    Avoid Minion of Doubt&apos;s <SpellShatteredResolve /> ground orbs. Will cast <SpellDarkClaw />
                    to the highest threat target (tank).
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Liu Flameheart</BossTitle>

            <p>3 phases. Serpent Dance 100 -&gt; 70. Jade Serpent Dace 70 -&gt; 30. The Jade Serpent 30 -&gt; 0.</p>

            <Tips>
                <Tip>
                    Dodge incoming <SpellSerpentWave /> during Phase 1.
                </Tip>
                <Tip>
                    Dodge incoming <SpellJadeSerpentWave /> during Phase 2. Will leave a trail of lingering pools. Deals
                    damage each second spent in it.
                </Tip>
                <Tip>Avoid <SpellJadeFireBreath /> frontal during Phase 3.</Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Watch out for <SpellSerpentKick />, as soon as she is finished casting <SpellSerpentStrike />.
                </Tank>
                <Tank>
                    <SpellJadeSerpentStrike /> deals initial damage plus absorb effect.
                </Tank>
                <Tank>
                    After <SpellJadeSerpentStrike />, she will follow up with <SpellJadeSerpentKick />, knocking
                    players within 9 yards, use active mitigation to avoid dying.
                </Tank>
                <Tank>
                    During Phase 3, she casts <SpellJadeFireBreath /> based on your location.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>Dispel <SpellSerpentStrike /> debuff from tank in Phase 1.</Healer>
                <Healer>
                    Pay attention to <SpellJadeSerpentStrike /> during Phase 2. Use healing cooldowns to top tank up.
                </Healer>
            </HealerTips>
        </BossSection>

        <BossSection>
            <BossTitle>Sha of Doubt</BossTitle>

            <Tips>
                <Tip>
                    During <SpellBoundsofReality />, use defensives and stack up together. You can then cleave
                    Figments of Doubt simultaneously before they siphon enough energy. At maximum energy, they deal
                    AoE damage to all players and heal <NpcShaofDoubt /> for 10% of total health. Stuns work.
                </Tip>
                <Tip>
                    Use personal defensive if not dispelled from <SpellTouchofNothingness />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Stack existing Figments of Doubt for cleave.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    <NpcShaofDoubt /> occasionally cast <SpellTouchofNothingness />, dispel 1 target off their debuff
                    and spot-heal the other one.
                </Healer>
                <Healer>
                    Watch out for <SpellWitherWill />, cast on 2 random players. Keep them healthy.
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default TempleOfTheJadeSerpent;
