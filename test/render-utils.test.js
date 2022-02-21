import { renderFamily, renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('renderFamily should render a div with class of family and h3 element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="family"><h3>The Zhang family</h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFamily({ name: 'The Zhang family' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderBunny should render a div with a class nname of bunnies and another div with the bunny name and class name of bunny ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="bunnies"><div class="bunny">Bugs Bunny</div></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny({ name: 'Bugs Bunny' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

