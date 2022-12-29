<?php

const TEMPLATE_NPC = <<<'JSX'
import { FunctionComponent } from 'react';

import Npc from '../../../Tags/Components/Npc';

const %s: FunctionComponent = () => (
    <Npc id={%d}>%s</Npc>
);

export default %s;

JSX;

const TEMPLATE_SPELL = <<<'JSX'
import { FunctionComponent } from 'react';

import Spell from '../../../Tags/Components/Spell';

const %s: FunctionComponent = () => (
    <Spell id={%d}>%s</Spell>
);

export default %s;

JSX;

const URL = 'https://www.icy-veins.com/wow/the-nokhud-offensive-dungeon-guide';
const DUNGEON = 'TheNokhudOffensive';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, URL);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$output = curl_exec($ch);

curl_close($ch);

preg_match_all('/wowdb\.com\/npcs\/([\d]+)\">([^<]+)<\/a>/', $output, $rawNpcs);
preg_match_all('/wowdb\.com\/spells\/([\d]+)\">([^<]+)<\/a>/', $output, $rawSpells);

$npcs = $spells = [];

for ($i = 0; $i < count($rawNpcs[0]); ++$i) {
    if (array_key_exists($rawNpcs[1][$i], $npcs)) {
        continue;
    }

    $npcs[$rawNpcs[1][$i]] = true;

    $component = 'Npc' . preg_replace('/[^a-zA-Z0-9]/','', $rawNpcs[2][$i]);

    file_put_contents(
        sprintf(__DIR__ . '/../../src/WoWGuides/Dungeons/%s/Npcs/%s.tsx', DUNGEON, $component),
        sprintf(TEMPLATE_NPC, $component, $rawNpcs[1][$i], $rawNpcs[2][$i], $component),
    );
}

for ($i = 0; $i < count($rawSpells[0]); ++$i) {
    if (array_key_exists($rawSpells[1][$i], $spells)) {
        continue;
    }

    $spells[$rawSpells[1][$i]] = true;

    $component = 'Spell' . preg_replace('/[^a-zA-Z0-9]/','', $rawSpells[2][$i]);

    file_put_contents(
        sprintf(__DIR__ . '/../../src/WoWGuides/Dungeons/%s/Spells/%s.tsx', DUNGEON, $component),
        sprintf(TEMPLATE_SPELL, $component, $rawSpells[1][$i], $rawSpells[2][$i], $component),
    );
}
