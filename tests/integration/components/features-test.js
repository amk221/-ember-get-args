import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';

module('features', function(hooks) {
  setupRenderingTest(hooks);

  test('it works', async function(assert) {
    assert.expect(8);

    await render(hbs`
      <Features as |f|>
        <f.Feature @name="foo" />
        <f.Feature @name="bar" />
      </Features>
    `);

    assert
      .dom('.feature:nth-child(1)')
      .hasClass('feature--active');

    assert
      .dom('.feature:nth-child(2)')
      .doesNotHaveClass('feature--active');

    assert
      .dom('.highlighted-feature:nth-child(1)')
      .hasClass('highlighted-feature--active');

    assert
      .dom('.highlighted-feature:nth-child(2)')
      .doesNotHaveClass('highlighted-feature--active');

    await triggerEvent('.feature:nth-child(2)', 'mouseenter');

    assert
      .dom('.feature:nth-child(1)')
      .doesNotHaveClass('feature--active');

    assert
      .dom('.feature:nth-child(2)')
      .hasClass('feature--active');

    assert
      .dom('.highlighted-feature:nth-child(1)')
      .doesNotHaveClass('highlighted-feature--active');

    assert
      .dom('.highlighted-feature:nth-child(2)')
      .hasClass('highlighted-feature--active');
  });
});
