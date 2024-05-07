import type { dxElementWrapper } from '@js/core/renderer';
import type { CollectionWidgetOptions, ItemLike } from '@js/ui/collection/ui.collection_widget.base';
import CollectionWidget from '@js/ui/collection/ui.collection_widget.base';

declare class Base<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TProperties extends CollectionWidgetOptions<any, TItem, TKey>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TItem extends ItemLike = any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TKey = any,
> extends CollectionWidget<TProperties> {
  _renderItems(items: unknown): void;
  _renderItem(
    index: number,
    itemData: TItem,
    $container: dxElementWrapper,
    $itemToReplace: dxElementWrapper,
  ): dxElementWrapper;
  _renderItemContent(args: {
    index: number;
    itemData: TItem;
    container: dxElementWrapper;
    contentClass: string;
    defaultTemplateName: string;
  }): dxElementWrapper;
  _itemSelector(): string;
  _itemContainer(): dxElementWrapper;

  _getItemData(item: Element | HTMLElement | dxElementWrapper): TItem;
  _getIndexByItem(item: TItem): number;
  _findItemElementByItem(item: TItem): dxElementWrapper;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypedCollectionWidget: typeof Base = CollectionWidget as any;

export default TypedCollectionWidget;
