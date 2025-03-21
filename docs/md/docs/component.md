<!-- Title and brief of article -->
# Component

Abstract class for building Components to be added to entities.

---

<!-- Description of subject class -->
## Description

In an entity component system, components act as properties of each entity. Each component gives its entity more functionality. Entities can have up to exatly one of each type of component. As the game loops, each component is updated. The Component class is abstract, being inherited to make user-defined components.

<!-- Show an example of the class in use here -->
## Sample Usage

	class myComponent final : public Component {
	private:
		void Start() {}
		void Update() {}

	public:
		int myVar{1};

		void myFunction() {}

		using Component::Component;
	};

---

<!-- Display members of the class, only display protected members if the class
     is meant to be inherited -->
## Public Members

<br class="empty"><table class="code">
	<tr>
		<td>**Type**
		</td>
		<td>**Member**
		</td>
		<td>**Description**
		</td>
	</tr>
	<tr>
		<td>Constructor([GameObject](/)*)
		</td>
		<td>[Component](/docs/component)
		</td>
		<td>Constructs the Component, passing a pointer to the Entity it is owned by.
		</td>
	</tr>
	<tr>
		<td>virtual Destructor(void)
		</td>
		<td>[~Component](/)
		</td>
		<td>Deconstructs the Component
		</td>
	</tr>
	<tr>
		<td>bool
		</td>
		<td>[isEnabled](/)
		</td>
		<td>Flag to determine \if the Component is active. A disabled component will \not be updated.
		</td>
	</tr>
</table>

## Protected Members

<!--
A newline character is added here to allow MD syntax within inline HTML. I
really have no idea why this works but it does. In order to hide the new line
character, we add class="empty" which is defined in the Style Sheet to not
display.
-->
<br class="empty"><table class="code">
	<tr>
		<td>**Type**
		</td>
		<td>**Member**
		</td>
		<td>**Description**
		</td>
	</tr>
	<tr>
		<td>[GameObject](/)&
		</td>
		<td>[gameObject](/)
		</td>
		<td>A reference to the Entity which owns the Component.
		</td>
	</tr>
	<tr>
		<td>[Transform](/)&
		</td>
		<td>[transform](/)
		</td>
		<td>A reference to the transform of the Component's owner.
		</td>
	</tr>
	<tr>
		<td>virtual void(void)
		</td>
		<td>[Start](/)
		</td>
		<td>Called only once, when the Component is added to an Entity.
		</td>
	</tr>
	<tr>
		<td>virtual void(void)
		</td>
		<td>[Update](/)
		</td>
		<td>Called once per game loop, used to update the state of the Component.
		</td>
	</tr>
</table>

<!-- <button onclick="display()">Try it</button> -->
<!-- <a onclick="display()" href="#">test</a> -->
<!-- <button onclick="display()">try me</button> -->
<!-- <span onclick="applyKeywordColoring()"><a href="javascript:;">hello world</a></span> -->

<!-- 
<p id="demo">eee</p>
<script>
function display() {
  document.getElementById("demo").innerHTML = "fff";
}
</script> -->


<span id="copyright"></span>

<!-- CPP Inline Syntax Highlighter Script: applies to all class="code", also
     insert a '\' before any keyword that should not be colored -->
<script src="/docs/assets/cpp-keyword-color.js"></script>


