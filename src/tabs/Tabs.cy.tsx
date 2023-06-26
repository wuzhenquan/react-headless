import Tabs from './Tabs'
import '../index.css'

const tabs = [
  { name: 'Vue' },
  { name: 'Svelte' },
  { name: 'React' },
  { name: 'Angular' }
];

const panels = [
  { content: 'Vue 是一个渐进式框架，用于构建用户界面。' },
  { content: 'Svelte 是一种新的构建用户界面的方法。' },
  { content: 'React 是一个构建用户界面的 JavaScript 库。' },
  { content: 'Angular 是一个用于构建移动和桌面 Web 应用程序的平台。' }
];

describe('测试组件 Tabs.cy.tsx 是否满足交互要求', () => {
  it('挂载组件 Tabs 组件到页面中', () => {
    // 看看: https://on.cypress.io/mounting-react
    cy.mount(<Tabs tabs={tabs} panels={panels} />)
  })

  it('默认显示 "Vue" 选项卡', () => {
    cy.mount(<Tabs tabs={tabs} panels={panels} />);

    // 检查是否显示了正确的内容
    cy.contains('Vue 是一个渐进式框架，用于构建用户界面。').should('be.visible');
  });

  it('当单击选项卡时显示正确的内容', () => {
    cy.mount(<Tabs tabs={tabs} panels={panels} />);

    // 点击 "Svelte" 选项卡, 检查是否显示了正确的内容
    cy.contains('Svelte').click();
    cy.contains('Svelte 是一种新的构建用户界面的方法。').should('be.visible');

    // 点击 "React" 选项卡, 检查是否显示了正确的内容
    cy.contains('React').click();
    cy.contains('React 是一个构建用户界面的 JavaScript 库。').should('be.visible');

    // 点击 "Angular" 选项卡, 检查是否显示了正确的内容
    cy.contains('Angular').click();
    cy.contains('Angular 是一个用于构建移动和桌面 Web 应用程序的平台。').should('be.visible');

    // 点击 "Vue" 选项卡, 检查是否显示了正确的内容
    cy.contains('Vue').click();
    cy.contains('Vue 是一个渐进式框架，用于构建用户界面。').should('be.visible');
  });
})