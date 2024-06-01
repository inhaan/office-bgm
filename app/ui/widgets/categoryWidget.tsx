import { Button, Checkbox } from "inhan-ui";
import { memo, useCallback, useState } from "react";
import { usePlayerStore } from "../playerStore";
import bgm from "@/app/lib/bgm.json";
import _ from "lodash";

interface CategoryWidgetProps {
    onApply: () => void;
}

export const CategoryWidget: React.FC<CategoryWidgetProps> = memo(function CategoryWidget({ onApply }) {
    const { selectedCategories, selectCategories } = usePlayerStore();
    const [checkeds, setCheckeds] = useState(() => selectedCategories);
    const allCategories = bgm.map(({ category }) => category);
    const isAllSelected = _.difference(allCategories, checkeds).length === 0;

    const onChangeAll = useCallback(
        (checked: boolean) => {
            if (checked) {
                setCheckeds(allCategories);
            } else {
                setCheckeds([]);
            }
        },
        [setCheckeds, allCategories]
    );

    const onChange = useCallback(
        (checked: boolean, category: string) => {
            if (checked) {
                setCheckeds([...checkeds, category]);
            } else {
                setCheckeds(_.without(checkeds, category));
            }
        },
        [checkeds, setCheckeds]
    );

    const onClickApply = useCallback(() => {
        if (checkeds.length === 0) {
            alert("Please select at least one category.");
            return;
        }

        selectCategories(checkeds);
        onApply();
    }, [selectCategories, onApply, checkeds]);

    return (
        <div>
            <div className="flex flex-col space-y-2">
                <CategoryCheckbox category="All" checked={isAllSelected} onChange={onChangeAll} />
                <hr />
                <CategoryCheckbox category="Favorites" checked={checkeds.includes("Favorites")} onChange={onChange} />
                {bgm.map(({ category }) => (
                    <CategoryCheckbox
                        key={category}
                        category={category}
                        checked={checkeds.includes(category)}
                        onChange={onChange}
                    />
                ))}
            </div>
            <div className="flex justify-end mt-2 px-4">
                <Button onClick={onClickApply}>Apply</Button>
            </div>
        </div>
    );
});

interface CategoryCheckboxProps {
    category: string;
    checked: boolean;
    onChange: (checked: boolean, category: string) => void;
}

const CategoryCheckbox: React.FC<CategoryCheckboxProps> = memo(function CategoryCheckbox({
    category,
    checked,
    onChange,
}) {
    const onChangeCheckbox = useCallback(
        (checked: boolean) => {
            onChange(checked, category);
        },
        [category, onChange]
    );

    return (
        <Checkbox checked={checked} onChange={onChangeCheckbox}>
            {category}
        </Checkbox>
    );
});
