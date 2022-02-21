import { renderFamily, renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('renderFamily should render a div with class of family and p element with family name and class of family-name', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="family"><p class="family-name">The Zhang family</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFamily({ name: 'The Zhang family' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderBunny should render a p element with the bunny name and a class of bunny-name ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<p class="bunny-name">Bugs Bunny</p>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny({ name: 'Bugs Bunny' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

