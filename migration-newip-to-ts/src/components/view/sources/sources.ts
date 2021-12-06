import { INewsData } from '../../../interfaces/interfaces';
import './sources.css';

class Sources {
    draw(data:Array<INewsData>) :void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLElement;
            const sourceNameEl = sourceClone.querySelector('.source__item-name'); 
            if (sourceNameEl) sourceNameEl.textContent = item.name;
            const sourceItemEl = sourceClone.querySelector('.source__item'); 
            if (sourceItemEl) sourceItemEl.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const container = document.querySelector('.sources');
        if (container) container.append(fragment);
    }
}

export default Sources;
