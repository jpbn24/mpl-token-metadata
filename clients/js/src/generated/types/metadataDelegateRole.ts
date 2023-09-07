/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum MetadataDelegateRole {
  AuthorityItem,
  Collection,
  Use,
  Data,
  ProgrammableConfig,
  DataItem,
  CollectionItem,
  ProgrammableConfigItem,
}

export type MetadataDelegateRoleArgs = MetadataDelegateRole;

export function getMetadataDelegateRoleSerializer(): Serializer<
  MetadataDelegateRoleArgs,
  MetadataDelegateRole
> {
  return scalarEnum<MetadataDelegateRole>(MetadataDelegateRole, {
    description: 'MetadataDelegateRole',
  }) as Serializer<MetadataDelegateRoleArgs, MetadataDelegateRole>;
}
