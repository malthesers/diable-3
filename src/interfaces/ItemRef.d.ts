import { Item } from './Item';
import { RefObject } from 'react'

interface ItemRef extends Item {
  ref: RefObject<HTMLDivElement>
}